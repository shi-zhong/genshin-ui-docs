/** @format */

import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(import.meta.url).slice(7);

export const rootPath = path
  .resolve(__dirname, '../')
  .replace('%E6%A1%8C%E9%9D%A2', '桌面');

const mdReg = /.md$/;
const ignoreReg = /^\./;

const exclude = ['index.md', 'README.md', 'template.md'];

/**
 * @param {string} file
 * @returns { boolean }
 */
const isMd = (file) => mdReg.test(file);

const mdFileName = (file: string) => /(.*).md$/.exec(file)?.[1];

const isIgnore = (file) => ignoreReg.test(file);

/**
 * @param {string} base
 * @param {object} record
 */
const readDirFiles = (base) => {
  let config: { excludes?: string[] } = {};
  const path = rootPath + '/' + base;

  const record: {
    files: string[];
    text: string;
    prefix?: string;
    link?: string;
  } = {
    files: [],
    text: base,
    prefix: `/${base}/`,
  };

  fs.readdirSync(path).forEach((file) => {
    let stat = fs.lstatSync(path + '/' + file);

    if (stat.isFile()) {
      if (isMd(file) && !isIgnore(file)) {
        if (exclude.includes(file)) return;
        record.files.push(mdFileName(file)!);
      } else if (file === 'index.json') {
        config = JSON.parse(fs.readFileSync(`${path}/index.json`).toString());
      }
    }
  });

  // due with record
  if (config.excludes) {
    record.files = Exclude(record.files, config.excludes);
  }

  ['text'].forEach((k) => {
    if (config[k]) {
      record[k] = config[k];
    }
  })

  return record
};

export const ReadNextDirs = (dirs: string[]) => dirs.map((dir) => readDirFiles(dir));

const Exclude = (o: string[], e: string[]) => o.filter((s) => !e.includes(s));

interface Groups {
  text: string;
  prefix?: string;
  link?: string;
  files: (Groups | string)[];
}

export default (sidebar: (Groups | string)[]) => {
  return sidebar.map((item) => {
    if (typeof item === 'string') {
      return item;
    } else {
      if (item.prefix) {
        const newItem: any = {
          ...item,
        };

        delete newItem.prefix;

        newItem.children = item.files.map((i) => {
          if (typeof i === 'string') {
            return {
              text: i,
              link: item.prefix + i,
            };
          }
        });

        return newItem;
      }
    }
    return item;
  });
};
