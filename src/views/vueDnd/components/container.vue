<script setup>
import { reactive } from 'vue'
import StoryItem from './storyItem.vue'
import ProgressItem from './progressItem.vue'

const state = reactive({
  progressList: [
    {
      id: 1,
      state: '待办',
      storyList: [
        {
          id: 1,
          name: 'story1',
          taskList: [
            {
              id: 1,
              text: 'Write a cool JS library',
            },
          ]
        },
        {
          id: 11,
          name: 'story11',
          taskList: [
            {
              id: 1,
              text: 'Write a cool JS library',
            },
            
          ]
        },
        {
          id: 12,
          name: 'story12',
          taskList: [
            {
              id: 1,
              text: 'Write a cool JS library',
            },
            
          ]
        }
      ]
    },
    {
      id: 2,
      state: '进行中',
      storyList: [
        {
          id: 2,
          name: 'story2',
          taskList: [
            {
              id: 1,
              text: 'Write a cool JS library',
            },
          ]
        },
        {
          id: 23,
          name: 'story23',
          taskList: [
            {
              id: 1,
              text: 'Write a cool JS library',
            },
          ]
        },
        {
          id: 24,
          name: 'story24',
          taskList: [
            {
              id: 1,
              text: 'Write a cool JS library',
            },
          ]
        }
      ]
    },
    {
      id: 3,
      state: '已完成',
      storyList: [
        {
          id: 35,
          name: 'story3',
          taskList: [
            {
              id: 1,
              text: 'Write a cool JS library',
            },
            {
              id: 2,
              text: 'Make it generic enough',
            },
            {
              id: 3,
              text: 'Write README',
            },
            {
              id: 4,
              text: 'Create some examples',
            },
            {
              id: 5,
              text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
            },
            {
              id: 6,
              text: '???',
            },
            {
              id: 7,
              text: 'PROFIT',
            },
          ]
        }
      ]
    }
  ]
})

const handleDrop = (targetProgressIndex, {id, index}) => {
  console.log(targetProgressIndex, id, index);
  const storyIndex = state.progressList[targetProgressIndex].storyList.findIndex(story => story.id === id)

  // 同一个状态移动
  if(storyIndex !== -1){
    const data = state.progressList[targetProgressIndex].storyList
    const dragRow = {...data[storyIndex]}
    data.splice(storyIndex, 1)
    data.splice(index, 0, dragRow)
    return
  }

  const progressPosition = getSourceProgressIndex(id)
  const targetStoryList = state.progressList[targetProgressIndex].storyList
  const sourceStoryList = state.progressList[progressPosition.index].storyList
  const dragRow = {...sourceStoryList[progressPosition.storyIndex]}
  sourceStoryList.splice(progressPosition.storyIndex, 1)
  targetStoryList.splice(index, 0, dragRow)
}

const getSourceProgressIndex = (id)=> {
  for(let i=0; i<state.progressList.length; i++) {
    const progress = state.progressList[i]
    const storyIndex = progress.storyList.findIndex(story=> story.id === id)
    if(storyIndex !== -1){

      return {index: i, storyIndex}
    }
  }
}
</script>

<template>
  <div class="progressLayout">
      <ProgressItem v-for="(progress, progressIndex) in state.progressList" :key="progress.id" :accept="['card']" @drop="handleDrop(progressIndex, $event)" :state="progress.state">
        <StoryItem v-for="(story, index) in progress.storyList" :id="story.id" :key="story.id" :text="story.name" :index="index">
        </StoryItem>
      </ProgressItem>
  </div>
</template>

<style lang="less" scoped>
.progressLayout {
  display: flex; 
  flex-direction: column;
  width: 100%;
}
</style>