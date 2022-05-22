type task = {
  title: string,
  done: boolean
}

const tasks: task[] = [
  {
    title: 'finish typeScript course',
    done: true
  },
  {
    title: 'finish array course',
    done: false
  },
  {
    title: 'finish english course',
    done: true
  }
]

const app: HTMLElement | null = document.getElementById('app')

if (app){
  tasks.forEach(task => {
    app.innerHTML += `<li>${task.title} - ${task.done} </li>`
  })
}
