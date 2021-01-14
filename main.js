// $("path, circle").hover(function(e) {
//     $('#info-box').css('display','block');
//     $('#info-box').html($(this).data('info'));
//   });
  
//   $("path, circle").mouseleave(function(e) {
//     $('#info-box').css('display','none');
//   });
  
//   $(document).mousemove(function(e) {
//     $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
//     $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
//   }).mouseover();
  
//   var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
//   if(ios) {
//     $('a').on('click touchend', function() { 
//       var link = $(this).attr('href');   
//       window.open(link,'_blank');
//       return false;
//     });
//   }

// next thing I have to do is inject the html with the state information ...




const pathElement = Array.from(document.getElementsByTagName('path'));
const circleElement = Array.from(document.getElementsByTagName('circle'));
const infoBox = document.getElementById('info-box');

const logPaths = () => {
    pathElement.forEach((p) => {
        p.addEventListener('click', () => {
           infoBox.style.display = 'block';
           infoBox.innerHTML = p.dataset.info;
        });
    });
    // pathElement.forEach((pa) => {
    //     pa.addEventListener('mouseleave', () => {
    //         infoBox.style.display = 'none';
    //     });
    // })
};

const logCircle = () => {
    circleElement.forEach((c) => {
        c.addEventListener('click', () => {
           infoBox.style.display = 'block';
           infoBox.innerHTML = p.dataset.info;
        });
    });
    // circleElement.forEach((c) => {
    //     c.addEventListener('mouseleave', () => {
    //         infoBox.style.display = 'none';
    //     });
    // })
}
// add event listeners and css props
logPaths();
logCircle();

