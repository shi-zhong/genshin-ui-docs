/** @format */

interface Groups {
  text: string;
  prefix?: string;
  link?: string;
  children: (Groups | string)[];
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

        newItem.children = item.children.map((i) => {
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
