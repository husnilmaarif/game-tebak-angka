alert('Halo...')
alert('Perkenalkan saya Husnil')
alert('Cara mainnya cukup mudah. Silahkan memilih angka dari 1-10 dengan kesempatan sebanyak 3x')
alert('Selamat bermain.. enjoyyy');

const kirim = document.querySelector('.container .kirim');
const input = document.querySelector('.container .input-user');
const komp = document.querySelector('.container .komputer');
const result = document.querySelector('.container .result');

var counter = 2;
var konfirmasi;
var comp = Math.round(Math.random() * 10 + 1);

function hasil(player, komputer){
	//KALAU MENANG
	if(player == komputer){
		result.style.color = 'green';
		result.innerHTML = 'Selamat, Anda Menang!!';
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
				result.innerHTML = 'komputer punya nilai lebih besar';
				return;
			}
			else{
				result.style.color = 'black';
				result.innerHTML = 'komputer punya nilai lebih kecil';
				return;
			}
		}

		//KALAU SUDAH TIDAK ADA KESEMPATAN
		else{
			kirim.innerHTML = 'submit';
			result.style.color = 'red';
			result.innerHTML = 'Maaf, Anda Kalah :(';
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
