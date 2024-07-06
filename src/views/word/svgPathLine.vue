<template>
  <svg ref="svgRef" width="50" height="1000" style="position: relative;">
</svg>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps(['dom1', 'dom2'])

const svgRef = ref(null);

watch(()=> props.dom1, ()=> drawerSvg())
watch(()=> props.dom2, ()=> drawerSvg())

const getPoint = () => {
    const rect1 = props.dom1.getBoundingClientRect();
    const rect2 = props.dom2.getBoundingClientRect();

    var point1_dom1_RT = { x: 0, y: rect1.top - 40 }; // dom1的右上边顶点
    var point2_dom2_LT = { x: 50, y: rect2.top - 40 };   // dom2的左边上顶点
    var point3_dom2_LB = { x: 50, y: rect2.bottom - 40 }; // dom2的左边下顶点
    var point4_dom1_RB = { x: 0, y: rect1.bottom - 40 }; // dom1的右下边顶点

    // 为贝塞尔曲线添加控制点，这里以两个控制点为例，位于dom1和dom2的中间
    var controlPoint1 = {
        x: (point1_dom1_RT.x + point2_dom2_LT.x) / 2,
        y: point1_dom1_RT.y
    };
    var controlPoint2 = {
        x: (point3_dom2_LB.x + point4_dom1_RB.x) / 2,
        y: point3_dom2_LB.y
    };
    return {
        point1_dom1_RT,
        point2_dom2_LT,
        point3_dom2_LB,
        point4_dom1_RB,
        controlPoint1,
        controlPoint2
    }
}

const drawerSvg = () => {
    const points = getPoint();
    const { point1_dom1_RT, point2_dom2_LT, point3_dom2_LB, point4_dom1_RB } = points;

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    var d = `M ${point1_dom1_RT.x},${point1_dom1_RT.y} 
            C ${point1_dom1_RT.x + 20},${point1_dom1_RT.y} ${point2_dom2_LT.x - 20},${point2_dom2_LT.y} ${point2_dom2_LT.x},${point2_dom2_LT.y}
            L ${point3_dom2_LB.x},${point3_dom2_LB.y}
            C ${point3_dom2_LB.x - 20},${point3_dom2_LB.y} ${point4_dom1_RB.x},${point4_dom1_RB.y - 20} ${point4_dom1_RB.x},${point4_dom1_RB.y}
            Z`;
    path.setAttribute('d', d);
    path.setAttribute('fill', '#f6ffed'); // 填充区域颜色
    path.setAttribute('stroke', '#b7eb8f'); // 线条颜色
    path.setAttribute('stroke-width', '1'); // 线条宽度
    svgRef.value.innerHTML = ''
    svgRef.value.appendChild(path);
}

onMounted(() => {
    drawerSvg()
})
</script>
<style scoped lang='scss'>
</style>