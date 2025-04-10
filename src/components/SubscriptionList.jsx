import React from 'react'

function SubscriptionList({ abonelikler, handleAbonelikSil }) {
    return (
        <div className='w-2/3 bg-gray-800 p-4 flex flex-col gap-2 rounded-xl'>
            {
                abonelikler.map((abonelik) => (
                    <div
                        key={abonelik.id}
                        className='bg-gray-700 rounded p-4 shadow w-1/2 mx-auto gap-1'
                    >
                        <p><span className='font-semibold'>Abonelik Adı:</span> {abonelik.aboneAdi}</p>
                        <p><span className='font-semibold'>Ücret:</span> {abonelik.aboneFiyati}</p>
                        <p><span className='font-semibold'>Son Ödeme Tarihi:</span> {abonelik.sonOdemeTarihi}</p>
                        <p><span className='font-semibold'>Kategori:</span> {abonelik.kategori}</p>
                        <button onClick={() => handleAbonelikSil(abonelik.id)} className='bg-red-600, text-white, rounded, hover:bg-red-700'>Sil</button>
                    </div>
                ))
            }
        </div>
    )
}

export default SubscriptionList