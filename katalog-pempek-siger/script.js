function orderWhatsApp(namaProduk) {
    let nomorWA = "6282338819383"; // Nomor WA Admin Pempek Siger
    let pesan = `Halo Kak, saya mau pesan ${namaProduk} dari katalog Pempek Siger. Apakah stoknya tersedia?`;
    
    let url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}