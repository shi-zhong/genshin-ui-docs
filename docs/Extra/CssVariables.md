<script setup>
  const styles = `
  --font-light-gray: rgb(116, 119, 128);
  --font-dark-gray: rgb(72, 85, 103);
  --font-green: rgb(107, 180, 99);
  --font-gold: rgb(254, 213, 127);

  --selected-border: rgb(130, 178, 69);
  --selected-bgc: rgb(72, 116, 45);
  --shadow: rgb(46, 62, 77);
  --blank-white: rgb(237, 229, 216);
  --lock-color: rgb(253, 138, 118);
  --starcolor: rgb(255, 224, 51);

  --rank-golden-bar: rgb(187, 104, 50);
  --rank-purple-bar: rgb(160, 86, 223);
  --rank-blue-bar: rgb(81, 127, 202);
  --rank-green-bar: rgb(43, 142, 113);
  --rank-gray-bar: rgb(113, 118, 138);

  --rank-gradient-degree: 135deg;
  --rank-golden-gradient: linear-gradient(
    var(--rank-gradient-degree, 135deg),
    rgb(186, 127, 68),
    rgb(208, 139, 63)
  );
  --rank-purple-gradient: linear-gradient(
    var(--rank-gradient-degree, 135deg),
    rgb(95, 106, 150),
    rgb(156, 122, 183)
  );
  --rank-blue-gradient: linear-gradient(
    var(--rank-gradient-degree, 135deg),
    rgb(92, 109, 143),
    rgb(83, 141, 179)
  );
  --rank-green-gradient: linear-gradient(
    var(--rank-gradient-degree, 135deg),
    rgb(86, 126, 128),
    rgb(87, 155, 132)
  );
  --rank-gray-gradient: linear-gradient(
    var(--rank-gradient-degree, 135deg),
    rgb(101, 110, 120),
    rgb(130, 137, 142)
  );

  --rank-golden-gradient-box: linear-gradient(
    var(--rank-gradient-degree, 135deg),
    rgba(106, 84, 82),
    rgba(220, 165, 81)
  );
  --rank-purple-gradient-box: linear-gradient(
    var(--rank-gradient-degree, 135deg),
    rgba(95, 88, 131),
    rgba(177, 131, 195)
  );
  --rank-blue-gradient-box: linear-gradient(
    var(--rank-gradient-degree, 135deg),
    rgba(81, 84, 117),
    rgba(74, 156, 180)
  );
  --rank-green-gradient-box: linear-gradient(
    var(--rank-gradient-degree, 135deg),
    rgba(73, 88, 93),
    rgba(92, 147, 108)
  );
  --rank-gray-gradient-box: linear-gradient(
    var(--rank-gradient-degree, 135deg),
    rgba(80, 88, 101),
    rgba(131, 141, 151)
  );

  --box-shadow: 0px 0px 4px var(--font-dark-gray); // @tag: box-shadow;

  --highlight-spe: rgb(253, 215, 130);
  --highlight-fire: rgb(248, 153, 153);
  --highlight-water: rgb(128, 191, 252);
  --highlight-elec: rgb(252, 172, 253);
  --highlight-ice: rgb(153, 254, 254);
  --highlight-grass: rgb(153, 255, 137);
  --highlight-wind: rgb(128, 253, 213);
  --highlight-stone: rgb(254, 229, 153);`
</script>

### 内置css变量(部分)与预览

<CssVariables :styles="styles" />