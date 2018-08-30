
// when dishes img clicked order list will create new order

$('#menu-a').on('click',function(){
     $(this).toggle();
	$('form').append(`
     <p>new order</p>
     <input class = 'itemList' type = 'hidden'></input>
`)
})

