alert('Tabe kanda')
alert('Ine game kappu2')
alert('Cara mainna gampangji. Pilihko angka dari 1-10, kesempatannu 3x ji')
alert('Gaskennn..');

const kirim = document.querySelector('.container .kirim');
const input = document.querySelector('.container .input-user');
const komp = document.querySelector('.container .komputer');
const result = document.querySelector('.container .result');

var counter = 2;
var konfirmasi;
var comp = Math.round(Math.random() * 9 + 1);

function hasil(player, komputer){
	//KALAU MENANG
	if(player == komputer){
		result.style.color = 'green';
		result.innerHTML = 'Tawwana menangi haha..';
		komp.innerHTML = komputer;
		input.setAttribute('disabled',true);
		return;
	}

	//KALAU KALAH
	else{

		//MASIH ADA KESEMPATAN
		if(counter > 0){
			counter--;
			kirim.innerHTML = 'submit (' + (counter+1) + ')';

			if(komputer > player){
				result.style.color = 'black';
				result.innerHTML = 'Angka na toh lebih besar dari ini';
				return;
			}
			else{
				result.style.color = 'black';
				result.innerHTML = 'Angka na toh lebih kecil dari ini';
				return;
			}
		}

		//KALAU SUDAH TIDAK ADA KESEMPATAN
		else{
			kirim.innerHTML = 'submit';
			result.style.color = 'red';
			result.innerHTML = 'Paccena haha..';
			komp.innerHTML = komputer;
			input.setAttribute('disabled',true);
			return;
		}
	}
}

//SETIAP TOMBOL DI KLIK
kirim.addEventListener('click', function(){
	hasil(input.value, comp);
});
