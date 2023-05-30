// 设置一个图标对象
var icon = {
  // 图标类型，现阶段只支持 image 类型
  type: "image",
  // 图片 url
  image: "./images/2.png",
  // 图片尺寸
  size: [20, 25],

  // 图片相对 position 的锚点，默认为 bottom-center
  anchor: "bottom-center",
};
var ico = [
  "",
  {
    type: "image",
    image: "./images/1.png",
    size: [20, 25],

    anchor: "bottom-center",
  },
  {
    type: "image",
    image: "./images/2.png",
    size: [20, 25],

    anchor: "bottom-center",
  },
  {
    type: "image",
    image: "./images/3.png",
    size: [30, 46],

    anchor: "bottom-center",
  },
  {
    type: "image",
    image: "./images/4.png",
    size: [20, 25],

    anchor: "bottom-center",
  },
  {
    type: "image",
    image: "./images/5.png",
    size: [20, 25],

    anchor: "bottom-center",
  },
  {
    type: "image",
    image: "./images/6.png",
    size: [20, 25],

    anchor: "bottom-center",
  },
];

export { icon, ico };
