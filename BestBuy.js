var bestBuyTimer = parseInt(localStorage.getItem('best-buy-count'))
var secondsToRefresh = 1
bestBuyTimer = isNaN(bestBuyTimer) ? 1 : bestBuyTimer
setTimeout(() => {
    var bestBuyPath = '**SITE_URL_GOES_HERE**'
    var confirmNoWarranty = '/en/required-parts'
    var paymentChoice = '/en/basket'
    console.log('Checking Page...')
    if(
        location.pathname.indexOf(bestBuyPokiPath) > -1 ||
    ){
        const el = document.querySelector('.addToCartButton');
        console.log('Page accessible')
        if(el.disabled){
            ++bestBuyTimer
            secondsToRefresh = (80 + bestBuyTimer)
            console.log(`Out of Stock... Reloading in ${secondsToRefresh} seconds`)
            localStorage.setItem('best-buy-count',`${bestBuyTimer}`)
            setTimeout(() => {
                location.reload();
                if(bestBuyTimer > 9){
                    localStorage.setItem('best-buy-count',`1`)
                }
            },1000 * secondsToRefresh)
        }else{
            doSound()
            el.click()
        }
    }else if(location.pathname.indexOf(confirmNoWarranty) > -1){
        doSound()
        const el = document.querySelector('[data-automation="go-to-cart"]');
        console.log('Is Confirm Adding Page')
        if(el.disabled){
            console.log('Error on Page')
            setTimeout(() => {
                location.reload();
            },1000 * 20)
        }else{
            console.log('Going to Cart!')
            el.click()
        }
    }else if(location.pathname.indexOf(paymentChoice) > -1){
        alert('Buy it now!')
        doSound()
    }else{
        console.log('Wrong Page : ' + location.href)
    }
},5000)
