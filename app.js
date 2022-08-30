const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Master Mercutio',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Chancellor Wallace'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Sarah Sharm',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Tae Lien',
  trackingNumber: 'suz2367'
}]



function drawPackages() {
  let packageitem = document.getElementById('item')
  let template = ''

  packages.forEach(package => {
    template += `
    <div class="row border bg-dark text-light mt-3 p-3 d-flex flex-row">
        <div class="col-1">
          <h3 class="text-danger">To:</h3>
        </div>
        <div class="col-6">
          <h3>${package.to}</h3>
        </div>
        <div class="col-2"><h3 class="text-danger">ID:</h3></div>
        <div class="col-3"><h3>${package.priorityLevel}</h3></div>
      </div>
    `
  })
  // @ts-ignore
  packageitem.innerHTML = template
}
function drawHeavyPackages() {
  let packageitem = document.getElementById('item')
  let template = ''

  packages.forEach(package => {
    if (package.weight >= 5) {
      template += `
    <div class="row border bg-dark text-light mt-3 p-3 d-flex flex-row">
        <div class="col-1">
          <h3 class="text-danger">To:</h3>
        </div>
        <div class="col-6">
          <h3>${package.to}</h3>
        </div>
        <div class="col-2"><h3 class="text-danger">ID:</h3></div>
        <div class="col-3"><h3>${package.priorityLevel}</h3></div>
      </div>
    `
    }
    return


  })

  // @ts-ignore
  packageitem.innerHTML = template
}


function drawPriorityPackages() {
  let packageitem = document.getElementById('item')
  let template = ''

  packages.forEach(package => {
    if (package.priorityLevel == 'express') {
      template += `
    <div class="row border bg-dark text-light mt-3 p-3 d-flex flex-row">
        <div class="col-1">
          <h3 class="text-danger">To:</h3>
        </div>
        <div class="col-6">
          <h3>${package.to}</h3>
        </div>
        <div class="col-2"><h3 class="text-danger">ID:</h3></div>
        <div class="col-3"><h3>${package.priorityLevel}</h3></div>
      </div>
    `
    }
    return


  })

  // @ts-ignore
  packageitem.innerHTML = template
}
function drawFragilePackages() {
  let packageitem = document.getElementById('item')
  let template = ''

  packages.forEach(package => {
    if (package.isFragile == true) {
      template += `
    <div class="row border bg-dark text-light mt-3 p-3 d-flex flex-row">
        <div class="col-1">
          <h3 class="text-danger">To:</h3>
        </div>
        <div class="col-6">
          <h3>${package.to}</h3>
        </div>
        <div class="col-2"><h3 class="text-danger">ID:</h3></div>
        <div class="col-3"><h3>${package.priorityLevel}</h3></div>
      </div>
    `
    }
    return


  })

  // @ts-ignore
  packageitem.innerHTML = template
}
drawPackages()



