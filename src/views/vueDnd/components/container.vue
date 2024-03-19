<script setup>
import { ref } from 'vue'
import StoryItem from './storyItem.vue'
import ProgressItem from './progressItem.vue'

const state = reactive({
  progressList: [
    {
      id: 1,
      state: 'test1',
      storyList: [
        {
          id: 1,
          name: 'story1',
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
    },
    {
      id: 2,
      state: 'test2',
      storyList: [
        {
          id: 2,
          name: 'story2',
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
    },
    {
      id: 3,
      state: 'test3',
      storyList: [
        {
          id: 2,
          name: 'story2',
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

const moveStory = (dragIndex, hoverIndex) => {
  const item = cards.value[dragIndex]
  cards.value.splice(dragIndex, 1)
  cards.value.splice(hoverIndex, 0, item)
}

const handleDrop = (targetProgressIndex, {id, index}) => {
  console.log(targetProgressIndex, id, index);
  state.progressList[targetProgressIndex].storyList.splice(index, 0, {...state.progressList[0].storyList[index]})
  state.progressList[0].storyList.splice(index, 1)
}
</script>

<template>
  <div class="progressLayout">
      <ProgressItem v-for="(progress, index) in state.progressList" :key="progress.id" :accept="['card']" @drop="handleDrop(index, $event)" :state="progress.state">
        <StoryItem v-for="(story, index) in progress.storyList" :id="story.id" :key="story.id" :text="story.name" :index="index"
          :move-card="moveStory" >
        </StoryItem>
      </ProgressItem>
  </div>
</template>

<style lang="less" scoped>
.progressLayout {
  display: flex; 
  flex-direction: row;
  width: 100%;
}
</style>