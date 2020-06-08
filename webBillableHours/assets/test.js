var f = {
    companyName: 'Oyoyo',
    employeeData: [
      {
        id: '344',
        unitPrice: '7.21',
        numberOfHours: 6.91,
        cost: 49.86
      },
      {
        id: '867',
        unitPrice: '2.14',
        numberOfHours: 5.95,
        cost: 12.733
      }
    ]
  }

  var d = new createTable(f.companyName, f.employeeData)
  d.create()

  document.getElementById('print').addEventListener('click', function(e){
      console.log('print')
      let printarea  =  document.getElementById('presentation');
      printarea.setAttribute('class', 'printarea');
      window.print();
      setTimeout(()=>{
        printarea.removeAttribute('class')
      },1000)
  })