//Temp...
function elkuld()
{
    let nev = document.getElementById('name').value, email = document.getElementById('email').value, phone = document.getElementById('phone').value,
        subject = document.getElementById('subject').value, comment = document.getElementById('comment').value;
    if (nev && email && phone && subject && comment) {
        //alert(`Név: ${nev}\nEmail: ${email}\nTelefon: ${phone}\n\nTárgy: ${subject}\nÜzenet: ${comment}`);
        document.getElementsByTagName('h4')[0].innerText = 'Üzenet elmentve!';
        document.getElementById('contactForm').innerHTML = `<p><b>Név:</b> ${nev}<br /><b>Email:</b> ${email}<br /><b>Telefon:</b> ${phone}</p>
                                                            <p><b>Tárgy:</b> ${subject}<br /><b>Üzenet:</b> ${comment}</p>
                                                            <button onclick="window.location.href='/';">Vissza a főoldalra</button>`;
    }
    else {
       alert('Kérlek tölts ki minden mezőt!'); 
    }
}
