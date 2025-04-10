import React from 'react'

function SubscriptionList({ abonelikler, handleAbonelikSil }) {
    return (
        <div className='w-2/3 bg-gray-800 p-4 flex flex-wrap rounded-xl'>
            {
                abonelikler.map((abonelik) => (
                    <div
                        key={abonelik.id}
                        className='bg-gray-800 border-2 flex flex-col gap-3 justify-center items-start border-gray-700 rounded-lg p-4 shadow w-1/2 h-1/2'
                    >
                        <p><span className='font-semibold'>Abonelik Adı:</span> {abonelik.aboneAdi}</p>
                        <p><span className='font-semibold'>Ücret:</span> {abonelik.aboneFiyati} TL</p>
                        <p><span className='font-semibold'>Son Ödeme Tarihi:</span> {abonelik.sonOdemeTarihi}</p>
                        <p><span className='font-semibold'>Kategori:</span> {abonelik.kategori}</p>
                        <button onClick={() => handleAbonelikSil(abonelik.id)} className='w-2/6 bg-red-600 text-white rounded hover:bg-red-700'>Sil</button>
                    </div>
                ))
            }
        </div>
    )
}

export default SubscriptionList