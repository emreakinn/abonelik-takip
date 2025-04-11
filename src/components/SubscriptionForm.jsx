import React, { useEffect } from 'react'

function SubscriptionForm({ aboneAdi, setAboneAdi, aboneFiyati, setAboneFiyati, sonOdemeTarihi, setSonOdemeTarihi, kategori, setKategori, handleEkle, secilenKategori, setSecilenKategori, kategoriler, duzenlenenAbonelik, setDuzenlenenAbonelik, aboneligiGuncelle, arama, setArama }) {

    useEffect(() => {
        if (duzenlenenAbonelik) {
            setAboneAdi(duzenlenenAbonelik.aboneAdi);
            setAboneFiyati(duzenlenenAbonelik.aboneFiyati);
            setSonOdemeTarihi(duzenlenenAbonelik.sonOdemeTarihi);
            setKategori(duzenlenenAbonelik.kategori);
        }
    }, [duzenlenenAbonelik]);

    const formuGonder = (e) => {
        e.preventDefault();

        const yeniAbonelik = {
            id: duzenlenenAbonelik ? duzenlenenAbonelik.id : Date.now(),
            aboneAdi,
            aboneFiyati,
            sonOdemeTarihi,
            kategori
        };

        if (duzenlenenAbonelik) {
            aboneligiGuncelle(yeniAbonelik);
        } else {
            handleEkle(yeniAbonelik);
        }

        setAboneAdi("");
        setAboneFiyati("");
        setSonOdemeTarihi("");
        setKategori("Eğlence");
        setDuzenlenenAbonelik(null);
    };

    return (
        <div className='w-1/3 h-[65vh] bg-gray-800 p-4 rounded-xl'>
            <form onSubmit={formuGonder} action="" className='flex flex-col gap-4'>
                <input
                    type="text"
                    className='bg-gray-700 p-2 rounded text-white'
                    placeholder='Abonelik Adı'
                    value={aboneAdi}
                    onChange={(e) => setAboneAdi(e.target.value)}
                />
                <input
                    type="number"
                    className='bg-gray-700 p-2 rounded text-white'
                    placeholder='Aylık Ücret'
                    value={aboneFiyati}
                    onChange={(e) => setAboneFiyati(e.target.value)}
                />
                <input
                    type="date"
                    className='bg-gray-700 p-2 rounded text-white'
                    placeholder='Son Ödeme Tarihi'
                    value={sonOdemeTarihi}
                    onChange={(e) => setSonOdemeTarihi(e.target.value)}
                />
                <select
                    className="bg-gray-700 text-white p-2 rounded"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                >
                    <option value="">Kategori seçin</option>
                    <option value="Eğlence">Eğlence</option>
                    <option value="İletişim">İletişim</option>
                    <option value="Sağlık">Sağlık</option>
                    <option value="Diğer">Diğer</option>
                </select>
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                >
                    {duzenlenenAbonelik ? "Kaydet" : "Ekle"}
                </button>
                <input
                    type='text'
                    className="mb-4 p-2 rounded bg-gray-700 border border-gray-500 text-white"
                    placeholder='Ara...'
                    value={arama}
                    onChange={(e) => setArama(e.target.value)}
                />
                <select
                    className="mb-4 p-2 rounded bg-gray-700 border border-gray-500 text-white"
                    value={secilenKategori}
                    onChange={(e) => setSecilenKategori(e.target.value)}
                >
                    <option value="">Tüm Kategoriler</option>
                    {kategoriler.map((katego, i) => (
                        <option key={i} value={katego}>{katego}</option>
                    ))}
                </select>
            </form>
        </div>
    )
}

export default SubscriptionForm