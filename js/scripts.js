// --- Data Dummy ---
const alphabets = [
    { letter: "A", image: "images/abjad/A.png", description: "Gerakan tangan untuk huruf A. (Buka tangan, ibu jari di samping)" },
    { letter: "B", image: "images/abjad/B.png", description: "Gerakan tangan untuk huruf B. (Empat jari tegak, ibu jari di depan telapak tangan)" },
    { letter: "C", image: "images/abjad/C.png", description: "Gerakan tangan untuk huruf C. (Tangan membentuk huruf C)" },
    { letter: "D", image: "images/abjad/D.png", description: "Gerakan tangan untuk huruf D. (Jari telunjuk tegak, jari lain melingkar)" },
    { letter: "E", image: "images/abjad/E.png", description: "Gerakan tangan untuk huruf E. (Jari-jari ditekuk ke dalam telapak tangan)" },
    { letter: "F", image: "images/abjad/F.png", description: "Gerakan tangan untuk huruf F. (Tiga jari tegak, ibu jari dan telunjuk bersentuhan)" },
    { letter: "G", image: "images/abjad/G.png", description: "Gerakan tangan untuk huruf G. (Kepalan tangan, telunjuk lurus ke samping)" },
    { letter: "H", image: "images/abjad/H.png", description: "Gerakan tangan untuk huruf H. (Telunjuk dan jari tengah lurus ke samping)" },
    { letter: "I", image: "images/abjad/I.png", description: "Gerakan tangan untuk huruf I. (Kelingking tegak)" },
    { letter: "J", image: "images/abjad/J.png", description: "Gerakan tangan untuk huruf J. (Kelingking tegak lalu melengkung ke bawah)" },
    { letter: "K", image: "images/abjad/K.png", description: "Gerakan tangan untuk huruf K. (Telunjuk dan jari tengah tegak, ibu jari di antara)" },
    { letter: "L", image: "images/abjad/L.png", description: "Gerakan tangan untuk huruf L. (Tangan membentuk huruf L)" },
    { letter: "M", image: "images/abjad/M.png", description: "Gerakan tangan untuk huruf M. (Tiga jari di atas ibu jari)" },
    { letter: "N", image: "images/abjad/N.png", description: "Gerakan tangan untuk huruf N. (Dua jari di atas ibu jari)" },
    { letter: "O", image: "images/abjad/O.png", description: "Gerakan tangan untuk huruf O. (Jari membentuk lingkaran)" },
    { letter: "P", image: "images/abjad/P.png", description: "Gerakan tangan untuk huruf P. (Mirip K, tapi telunjuk dan tengah menunjuk ke bawah)" },
    { letter: "Q", image: "images/abjad/Q.png", description: "Gerakan tangan untuk huruf Q. (Mirip G, tapi telunjuk menunjuk ke bawah)" },
    { letter: "R", image: "images/abjad/R.png", description: "Gerakan tangan untuk huruf R. (Jari tengah silang dengan telunjuk)" },
    { letter: "S", image: "images/abjad/S.png", description: "Gerakan tangan untuk huruf S. (Kepalan tangan, ibu jari di depan)" },
    { letter: "T", image: "images/abjad/T.png", description: "Gerakan tangan untuk huruf T. (Telunjuk di atas ibu jari, jari lain ditekuk)" },
    { letter: "U", image: "images/abjad/U.png", description: "Gerakan tangan untuk huruf U. (Jari telunjuk dan tengah tegak lurus)" },
    { letter: "V", image: "images/abjad/V.png", description: "Gerakan tangan untuk huruf V. (Jari telunjuk dan tengah membentuk V)" },
    { letter: "W", image: "images/abjad/W.png", description: "Gerakan tangan untuk huruf W. (Tiga jari tegak seperti W)" },
    { letter: "X", image: "images/abjad/X.png", description: "Gerakan tangan untuk huruf X. (Telunjuk ditekuk seperti kait)" },
    { letter: "Y", image: "images/abjad/Y.png", description: "Gerakan tangan untuk huruf Y. (Ibu jari dan kelingking tegak)" },
    { letter: "Z", image: "images/abjad/Z.png", description: "Gerakan tangan untuk huruf Z. (Telunjuk melengkung seperti Z)" }
];

const words = [
    { word: "Hati-Hati", image: "images/kata/hati hati.jpg", description: " Gerakan : Tangan terbuka dengan jari terpisah, digerakkan maju-mundur." },
    { word: "Terima Kasih", image: "images/kata/terimakasih.jpg", description: " Gerakan : Ujung jari ke dagu, lalu gerakkan ke depan." },
    { word: "Lupa", image: "images/kata/lupa.jpg", description: " Gerakan : Ujung jari di pelipis, gesek ke samping sambil membuka." },
    { word: "Maaf", image: "images/kata/maaf.jpg", description: " Gerakan : Ujung jari di sudut mulut, gerakkan ke atas dan samping." },
    { word: "Kamu", image: "images/kata/kamu.jpg", description: " Gerakan : Tangan terbuka ke depan, didorong dan ditarik." },
    { word: "Siapa", image: "images/kata/siapa.jpg", description: "Gerakan : Ibu jari ke atas, ditarik ke belakang bahu." },
    { word: "Bagaimana", image: "images/kata/bagaimana.jpg", description: " Gerakan : Kedua tangan terbuka, digerakkan naik-turun bergantian." },
    { word: "Dimana", image: "images/kata/dimana.jpg", description: "Gerakan : Dua jari telunjuk digerakkan melingkar ke samping." }
];
const numbers = [
    { number: "1", image: "images/angka/1.png", description: "Satu jari tegak." },
    { number: "2", image: "images/angka/2.png", description: "Dua jari tegak." },
    { number: "3", image: "images/angka/3.png", description: "Tiga jari tegak (ibu jari juga ikut)." },
    { number: "4", image: "images/angka/4.png", description: "Empat jari tegak." },
    { number: "5", image: "images/angka/5.png", description: "Lima jari tegak (tangan terbuka)." },
    { number: "6", image: "images/angka/6.png", description: "Kelingking dan ibu jari terbuka, jari lain ditekuk." },
    { number: "7", image: "images/angka/7.png", description: "Ibu jari dan kelingking terbuka, jari lain melingkar." },
    { number: "8", image: "images/angka/8.png", description: "Ibu jari dan telunjuk bersentuhan, jari lain terbuka. (Seperti yang di gambar referensi)" },
    { number: "9", image: "images/angka/9.png", description: "Telunjuk melengkung menyentuh ibu jari, jari lain ditekuk." },
    { number: "10", image: "images/angka/10.png", description: "Tangan mengepal, ibu jari tegak dan digoyangkan." }
];

// --- Data Video Baru (GANTI YOUTUBE ID DENGAN YANG ASLI!) ---
const videos = [
    { title: "Pengantar Bimbingan Konseling Inklusif", youtubeId: "0ACEg7KCnFA?si=zBkooXtOKqAeR17N", description: "Video ini membahas dasar-dasar bimbingan konseling untuk peserta didik berkebutuhan khusus." },
    { title: "Tips Mengajar Anak Autis", youtubeId: "W4WvqYBGYrY?si=WgpyKEgBSHwSisJX", description: "Panduan praktis bagi calon guru SLB dalam mengajar anak autis." },
    { title: "Memahami Kecerdasan Beragam (Multiple Intelligences)", youtubeId: "ytd1EFbLj_k?si=hUW-S2toNVZmhtqR", description: "Mengenal berbagai jenis kecerdasan untuk pendekatan konseling yang personal." },
    { title: "Pengembangan Diri Remaja", youtubeId: "0CywKcxODhM?si=ZS4VJTUSUTvQ4wo0", description: "Video motivasi dan tips untuk pengembangan diri yang positif bagi remaja." }
    // Tambahkan lebih banyak video di sini
];

// --- Data Artikel Baru ---
const articles = [
    { 
        title: "11 Permainan untuk Melatih Fokus dan Konsentrasi Anak Autis", 
        link: "https://www.slbautisma-yppapadang.sch.id/berita/detail/146657/11-permainan--untuk-melatih-fokus-dan-konsentrasi-anak-autis-slb-autisma-yppa-padang/", 
        description: "Strategi permainan yang efektif untuk meningkatkan perhatian dan konsentrasi pada anak autis." 
    },
    { 
        title: "Pentingnya Konseling bagi Orang Tua yang Memiliki ABK", 
        link: "https://www.slbautisma-yppapadang.sch.id/berita/detail/991240/pentingnya-konseling-bagi-orang-tua-yang-memiliki-abk--di-slb-autisma-yppa-padang/", 
        description: "Membahas peran krusial konseling dalam mendukung orang tua dengan anak berkebutuhan khusus." 
    },
    { 
        title: "Pemberdayaan ABK dalam Pendidikan Vokasi", 
        link: "https://journal.nahnuinisiatif.com/index.php/ARJI/article/download/304/257/1391", 
        description: "Analisis studi kasus tentang pemberdayaan anak berkebutuhan khusus melalui pendidikan vokasi." 
    }
    // Tambahkan lebih banyak artikel di sini jika ada
];


// --- Fungsi untuk memuat konten ke halaman ---

function loadAlphabetContent() {
    const alphabetButtonsContainer = document.getElementById('alphabet-buttons-container');
    const currentAlphabetImage = document.getElementById('current-alphabet-image');
    const currentAlphabetLetter = document.getElementById('current-alphabet-letter');
    const currentAlphabetDescription = document.getElementById('current-alphabet-description');

    if (alphabetButtonsContainer) {
        alphabetButtonsContainer.innerHTML = ''; // Kosongkan kontainer sebelum mengisi
        alphabets.forEach((alpha, index) => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline-primary btn-sign-letter m-2'; // Tambah m-2 untuk margin antar tombol
            button.textContent = alpha.letter;
            button.setAttribute('data-index', index); // Simpan index data

            button.addEventListener('click', function() {
                // Hapus kelas 'active' dari semua tombol
                document.querySelectorAll('.btn-sign-letter').forEach(btn => btn.classList.remove('active'));
                // Tambahkan kelas 'active' ke tombol yang diklik
                this.classList.add('active');

                // Tampilkan detail
                currentAlphabetImage.src = alpha.image;
                currentAlphabetImage.alt = `Isyarat untuk huruf ${alpha.letter}`;
                currentAlphabetLetter.textContent = alpha.letter;
                currentAlphabetDescription.textContent = alpha.description;
            });
            alphabetButtonsContainer.appendChild(button);

            // Set default tampilan awal ke huruf pertama (opsional, bisa dihapus)
            if (index === 0) {
                button.click(); // Otomatis klik tombol pertama saat halaman dimuat
            }
        });
    }
}

function loadWordContent() {
    const wordButtonsContainer = document.getElementById('word-buttons-container');
    const currentWordImage = document.getElementById('current-word-image');
    const currentWordText = document.getElementById('current-word-text');
    const currentWordDescription = document.getElementById('current-word-description');

    if (wordButtonsContainer) {
        wordButtonsContainer.innerHTML = '';
        words.forEach((word, index) => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline-success btn-sign-word m-2'; // Warna hijau untuk kata, tambah m-2
            button.textContent = word.word;
            button.setAttribute('data-index', index);

            button.addEventListener('click', function() {
                document.querySelectorAll('.btn-sign-word').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                currentWordImage.src = word.image;
                currentWordImage.alt = `Isyarat untuk kata ${word.word}`;
                currentWordText.textContent = word.word;
                currentWordDescription.textContent = word.description;
            });
            wordButtonsContainer.appendChild(button);

            // Set default tampilan awal ke kata pertama (opsional)
            if (index === 0) {
                button.click();
            }
        });
    }
}

function loadNumberContent() {
    const numberButtonsContainer = document.getElementById('number-buttons-container'); 
    const currentNumberImage = document.getElementById('current-number-image'); 
    const currentNumberText = document.getElementById('current-number-text'); 
    const currentNumberDescription = document.getElementById('current-number-description'); 

    if (numberButtonsContainer) {
        // ... Logika serupa dengan alphabet/word, tapi menggunakan data 'numbers' ...
        numbers.forEach((num, index) => {
            const button = document.createElement('button');
            button.className = 'btn btn-outline-info btn-sign-number m-2'; // Warna info untuk angka, tambah m-2
            button.textContent = num.number;
            button.setAttribute('data-index', index);

            button.addEventListener('click', function() {
                document.querySelectorAll('.btn-sign-number').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                currentNumberImage.src = num.image;
                currentNumberImage.alt = `Isyarat untuk angka ${num.number}`;
                currentNumberText.textContent = num.number;
                currentNumberDescription.textContent = num.description;
            });
            numberButtonsContainer.appendChild(button);

            if (index === 0) {
                button.click();
            }
        });
    }
}


function loadVideoContent() {
    const videoContainer = document.getElementById('video-container');
    if (videoContainer) {
        videoContainer.innerHTML = '';
        videos.forEach(video => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col'; // Gunakan col, Bootstrap akan mengatur grid otomatis

            colDiv.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-body p-3">
                        <h5 class="card-title mb-3">${video.title}</h5>
                        <div class="ratio ratio-16x9 mb-3"> 
                            <iframe 
                                src="https://www.youtube.com/embed/${video.youtubeId}" 
                                title="${video.title}"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        <p class="card-text">${video.description}</p>
                    </div>
                </div>
            `;
            videoContainer.appendChild(colDiv);
        });
    }
}

// Fungsi baru untuk memuat konten artikel
function loadArticleContent() {
    const articleContainer = document.getElementById('article-container'); // ID div di artikel.html
    if (articleContainer) {
        articleContainer.innerHTML = '';
        articles.forEach(article => {
            const colDiv = document.createElement('div');
            colDiv.className = 'col-md-6 mb-4'; // Kolom untuk artikel, sesuaikan layout Bootstrap

            colDiv.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title text-primary">${article.title}</h5>
                        <p class="card-text">${article.description}</p>
                        <a href="${article.link}" class="btn btn-outline-primary btn-sm mt-2" target="_blank" rel="noopener noreferrer">Baca Artikel <i class="bi bi-box-arrow-up-right"></i></a>
                    </div>
                </div>
            `;
            articleContainer.appendChild(colDiv);
        });
    }
}


// --- Panggil fungsi saat DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', function() {
    // Panggil fungsi yang sesuai dengan halaman yang sedang dibuka
    if (document.getElementById('alphabet-buttons-container')) {
        loadAlphabetContent();
    }
    if (document.getElementById('word-buttons-container')) {
        loadWordContent();
    }
    // Jika kalian punya halaman untuk angka, panggil di sini
    if (document.getElementById('number-buttons-container')) {
        loadNumberContent();
    }
    if (document.getElementById('video-container')) {
        loadVideoContent();
    }
    // Panggil untuk halaman artikel baru
    if (document.getElementById('article-container')) {
        loadArticleContent();
    }
});