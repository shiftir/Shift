$('.mdb-select').material_select();
$(document).ready(function(){
$('.autofocus').focus();
});
$(window).on('scroll resize', function() {
var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
var scrollPos=scrollTop/3;
var winHeight=$(window).height();
var winWidth=$(window).width();
if(winWidth<776){if(scrollTop>50 && scrollTop<winHeight){$('.callus').addClass('animated fadeOut');}else{$('.callus').removeClass('animated fadeOut');$('.callus').addClass('animated fadeIn');}}
if(scrollTop>(winHeight-70)){scrollPos=scrollPos/14;$('body').css({'padding-top':winHeight});$('body').addClass('scrolled');$('.phoneImport').removeClass('row flex-center');}else{$('body').removeClass('scrolled');$('body').css({'padding-top':'0'});$('.phoneImport').addClass('row flex-center');}
$('.parallax').css({'background-position':'center -'+scrollPos+'%'});
});
$('.parallax').height($(window).height());
$(window).on('resize', function(){
$('.parallax').height($(window).height());
});
$('#submit').on('click',function(){
var phonelength=$('#phone').val().length;
if(phonelength>9 && phonelength<12 && $.isNumeric($('#phone').val())){
$('form#PhoneImport').submit();
}else{alert('لطفا شماره تلفن را درست وارد کنید.');return false;}
});