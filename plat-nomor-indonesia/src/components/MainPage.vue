<template>
  <div class="main-page">
    <center><h1>Plat Nomor</h1><br/>
      <h5>Input kode plat nomor</h5>
    </center>
    <br/>
    <div class="plat-nomor">
      <input class="inputPlat" v-model="searchQuery" maxlength="2"/>
    </div>
    <br/><br/>
    <div class="result row top20">
      <div v-if="searchQuery!==''" v-for="plat in filterItems(plats)" :key="plat.id">
        <div class="template-block" :id="plat.id">
          <h1 class="yellow">{{ plat.provinsi }}</h1>
          <h5 class="plat">Plat {{plat.id}}</h5><br/>
          <h4>{{ plat.kota }}</h4>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        searchQuery: '',
        plats: [
        {
          id: 'BL',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Nanggroe Aceh Darussalam',
          provinsi: 'Nanggroe Aceh Darussalam'
        },
        {
          id: 'BB',
          kota: 'Kabupaten Tapanuli Utara, Kabupaten Tapanuli Tengah, Kabupaten Tapanuli Selatan, Kabupaten Sibolga, Kabupaten Dairi, Kabupaten Nias',
          provinsi: 'Sumatera Utara'
        },
        {
          id: 'BK',
          kota: 'Kota Medan, Kabupaten Deli Serdang, Kabupaten Tebing Tinggi, Kabupaten Langkat, Kabupaten Binjai, Kabupaten Simalungun, Kabupaten Pematang Siantar, Kabupaten Tanah Karo, Kabupaten Asahan, Kabupaten Labuhan Batu',
          provinsi: 'Sumatera Utara'
        },
        {
          id: 'BA',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Sumatera Barat',
          provinsi: 'Sumatera Barat'
        },
        {
          id: 'BM',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Riau',
          provinsi: 'Riau'
        },
        {
          id: 'BP',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Kepulauan Riau',
          provinsi: 'Kepulauan Riau'
        },
        {
          id: 'BG',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Sumatera Selatan',
          provinsi: 'Sumatera Selatan'
        },
        {
          id: 'BN',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Bangka-Belitung',
          provinsi: 'Bangka-Belitung'
        },
        {
          id: 'BE',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Lampung',
          provinsi: 'Lampung'
        },
        {
          id: 'BD',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Bengkulu',
          provinsi: 'Bengkulu'
        },
        {
          id: 'BH',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Jambi',
          provinsi: 'Jambi'
        },
        {
          id: 'B ',
          kota: 'Seluruh Kabupaten/Kota di Provinsi DKI Jakarta',
          provinsi: 'DKI Jakarta'
        },
        {
          id: 'D ',
          kota: 'Kota Bandung, Kabupaten Bandung',
          provinsi: 'Jawa Barat'
        },
        {
          id: 'F ',
          kota: 'Kodya Bogor, Kabupaten Bogor, Kabupaten Cianjur, Kabupaten Sukabumi',
          provinsi: 'Jawa Barat'
        },
        {
          id: 'T ',
          kota: 'Kabupaten Purwakarta, Kabupaten Karawang, Kabupaten Subang',
          provinsi: 'Jawa Barat'
        },
        {
          id: 'E ',
          kota: 'Kota Cirebon, Kabupaten Cirebon, Kabupaten Indramay, Kabupaten Malajengka, Kabupaten Kuningan',
          provinsi: 'Jawa Barat'
        },
        {
          id: 'Z ',
          kota: 'Kabupaten Garut, Kabupaten Sumedang, Kabupaten Tasikmalaya, Kabupaten Ciamis',
          provinsi: 'Jawa Barat'
        },
        {
          id: 'H ',
          kota: 'Kota Semarang, Kabupaten Salatiga, Kabupaten Kendai, Kabupaten Demak, Kabupaten Grobogan',
          provinsi: 'Jawa Tengah'
        },
        {
          id: 'G ',
          kota: 'Kota Pekalongan, Kabupaten Pekalogan, Kabupaten Brebes, Kabupaten Tegal, Kabupaten Siawi, Kabupaten Batang, Kabupaten Pemalang',
          provinsi: 'Jawa Tengah'
        },
        {
          id: 'K ',
          kota: 'Kabupaten Pati, Kabupaten Kudus, Kabupaten Jepara, Kabupaten Rembang, Kabupaten Blora',
          provinsi: 'Jawa Tengah'
        },
        {
          id: 'R ',
          kota: 'Kabupaten Banyumas, Kabupaten Cilacap, Kabupaten Purbalingga, Kabupaten Banjarnegara',
          provinsi: 'Jawa Tengah'
        },
        {
          id: 'AA',
          kota: 'Kota Magelang, Kabupaten Magelang, Kabupaten Purworejo, Kabupaten Kebumen, Kabupaten Temanggung, Kabupaten Wonosobo',
          provinsi: 'Jawa Tengah'
        },
        {
          id: 'AD',
          kota: 'Kota Surakarta, Kabupaten Sukoharjo, Kabupaten Boyolali, Kabupaten Sragen, Kabupaten Karanganyar, Kabupaten Wonogiri, Kabupaten Klaten',
          provinsi: 'Jawa Tengah'
        },
        {
          id: 'AB',
          kota: 'Seluruh Kabupaten/Kota di Provinsi DI Yogyakarta',
          provinsi: 'DI Yogyakarta'
        },
        {
          id: 'L ',
          kota: 'Kota Surabaya',
          provinsi: 'Jawa Timur'
        },
        {
          id: 'W ',
          kota: 'Kabupaten Gresik, Kabupaten Sidoarjo, Kabupaten Mojokerto, Kabupaten Jombang',
          provinsi: 'Jawa Timur'
        },
        {
          id: 'N ',
          kota: 'Kota Malang, Kabupaten Malang, Kabupaten Probolinggo, Kabupaten Pasuruan, Kabupaten Lumajang',
          provinsi: 'Jawa Timur'
        },
        {
          id: 'P ',
          kota: 'Kabupaten Besuki, Kabupaten Situbondo, Kabupaten Bondowoso, Kabupaten Jember, Kabupaten Banyuwangi',
          provinsi: 'Jawa Timur'
        },
        {
          id: 'AG',
          kota: 'Kota Kediri, Kabupaten Kediri/Pare, Kabupaten Blitar, Kabupaten Tulungagung, Kabupaten Nganjuk, Kabupaten Trenggalek',
          provinsi: 'Jawa Timur'
        },
        {
          id: 'AE',
          kota: 'Kota Madiun, Kabupaten Madiun, Kabupaten Ngawi, Kabupaten Magetan, Kabupaten Ponorogo, Kabupaten Pacitan',
          provinsi: 'Jawa Timur'
        },
        {
          id: 'S ',
          kota: 'Kabupaten Bojonegoro, Kabupaten Tuban, Kabupaten Lamongan',
          provinsi: 'Jawa Timur'
        },
        {
          id: 'M ',
          kota: 'Kabupaten Pamekasan, Kabupaten Bangkalan, Kabupaten Sampang, Kabupaten Sumenep',
          provinsi: 'Jawa Timur'
        },
        {
          id: 'DK',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Bali',
          provinsi: 'Bali'
        },
        {
          id: 'DR',
          kota: 'Kota Mataram, Kabupaten Lombok Barat, Kabupaten Lombok Tengah, Kabupaten Lombok Timur',
          provinsi: 'Nusa Tenggara Barat'
        },
        {
          id: 'EA',
          kota: 'Kabupaten Sumbawa, Kabupaten Dompu, Kabupaten Bima',
          provinsi: 'Nusa Tenggara Barat'
        },
        {
          id: 'DH',
          kota: 'Kota Kupang, Kabupaten Timor Tengah Selatan, Kabupaten Timor Tengah Utara',
          provinsi: 'Nusa Tenggara Timur'
        },
        {
          id: 'EB',
          kota: 'Kabupaten Ende, Kabupaten Sikka, Kabupaten Flores Timur, Kabupaten Ngada, Kabupaten Manggarai, Kabupaten Alor',
          provinsi: 'Nusa Tenggara Timur'
        },
        {
          id: 'ED',
          kota: 'Kabupaten Sumba Timur, Kabupaten Sumba Barat',
          provinsi: 'Nusa Tenggara Timur'
        },
        {
          id: 'KB',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Kalimantan Barat',
          provinsi: 'Kalimantan Barat'
        },
        {
          id: 'DA',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Kalimantan Selatan',
          provinsi: 'Kalimantan Selatan'
        },
        {
          id: 'KH',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Kalimantan Tengah',
          provinsi: 'Kalimantan Tengah'
        },
        {
          id: 'KT',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Kalimantan Timur',
          provinsi: 'Kalimantan Timur'
        },
        {
          id: 'KU',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Kalimantan Utara',
          provinsi: 'Kalimantan Utara'
        },
        {
          id: 'DB',
          kota: 'Kota Manado, Kabupaten Minahasa, Kabupaten Bitung',
          provinsi: 'Sulawesi Utara'
        },
        {
          id: 'DL',
          kota: 'Kabupaten Sangir Talaud',
          provinsi: 'Sulawesi Utara'
        },
        {
          id: 'DM',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Gorontalo',
          provinsi: 'Gorontalo'
        },
        {
          id: 'DN',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Sulawesi Tengah',
          provinsi: 'Sulawesi Tengah'
        },
        {
          id: 'DD',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Sulawesi Selatan',
          provinsi: 'Sulawesi Selatan'
        },
        {
          id: 'DC',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Sulawesi Barat',
          provinsi: 'Sulawesi Barat'
        },
        {
          id: 'DT',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Sulawesi Tenggara',
          provinsi: 'Sulawesi Tenggara'
        },
        {
          id: 'DE',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Maluku',
          provinsi: 'Maluku'
        },
        {
          id: 'DG',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Maluku Utara',
          provinsi: 'Maluku Utara'
        },
        {
          id: 'DS',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Papua',
          provinsi: 'Papua'
        },
        {
          id: 'PB',
          kota: 'Seluruh Kabupaten/Kota di Provinsi Papua Barat',
          provinsi: 'Papua Barat'
        }
        ]
      }
    },
    methods: {
      gotoPage(route) {
        this.$router.push(route);
      },
      filterItems(plats) {
        var app = this;
        return plats.filter(function(plat) {
          let regex = new RegExp('(' + app.searchQuery + ')', 'i');
          return plat.id.match(regex);
        })

      }
    }
  }
</script>
<style>
  .yellow{
    color:yellow;
  }
  .main-page{
    padding: 30px 30px;
    background: linear-gradient(-60deg, #133a7c, #133a7c, #081534, #081534);
    height: 640px;
    width: 360px;
    max-height: 640px;
    background-size: 400% 400%;
    -webkit-animation: Gradient 5s ease infinite;
    -moz-animation: Gradient 5s ease infinite;
    animation: Gradient 5s ease infinite;
    color:white
  }
  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
  .plat-nomor{
    background-color: black;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    border: 5px solid #fff;
    width: 300px;
    height: 150px;
    padding: 10px 10px;
  }
  .inputPlat{
    background-color: black;
    padding:15px 15px;
    color: white;
    font-size: 60px;
    max-width: 120px;
    border:none;
  }
  .plat{
    background: white;
    color: black;
    padding: 5px 5px;
    border-radius: 2px;
  }
  .result{
    max-height: 300px;
    overflow: auto;
    padding: 5px 5px;
  }

</style>
