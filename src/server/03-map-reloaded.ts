(() => {
  type order = {
    customerName: string,
    total: number,
    delivered: boolean
  }

  const orders: order[] = [
    {
      customerName: 'Enderson',
      total: 120,
      delivered: true
    },
    {
      customerName: 'Nicolas',
      total: 60,
      delivered: false
    },
    {
      customerName: 'Santiago',
      total: 120,
      delivered: true
    },
    {
      customerName: 'Daniel',
      total: 60,
      delivered: false
    },
  ]

  console.log('original', orders);
  const rta: number[] = orders.map(item => item.total)
  console.log('rta', rta)

  type orderR = {
    customerName: string,
    total: number,
    delivered: boolean,
    tax: number
  }
  const rta2: orderR[] = orders.map(item => {
    const rta: orderR = {...item, tax: 0.19}
    return item
  })

  console.log(rta2)
})();
