const prev = $('#prev');
const next = $('#next');
const imageWrapper = $('.sliders');
const images = $('.sliders div'); 

const imgWidth = 550;
let currImgIdx = 0;
let currPosition = 0;

function main(){
    prevPressed();
    nextPressed();
}

function prevPressed(){
    prev.on('click', () => {
        currImgIdx--;

        if(currImgIdx < 0){
            currImgIdx = images.length - 1;
            currPosition = -imgWidth * currImgIdx;
        }else{
            currPosition += imgWidth;
        }

        slide();
    });
}

function nextPressed(){
    next.on('click', () => {
        currImgIdx++;

        if (currImgIdx > images.length){
            currImgIdx = 0;
            currPosition = 0;
        }else{
            currPosition -= imgWidth;
        }

        slide();
    });
}

function slide(){
    const prevElm = images.eq(0);
    prevElm.animate({marginLeft: currPosition});
}

main();