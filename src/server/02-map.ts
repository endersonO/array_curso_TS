(() => {
  const letters: string[] = ['a', 'b', 'c']

  const newArray: string[] = letters.map(item => item + '++')
  console.log("origninal", letters)
  console.log("new", newArray)
})();
