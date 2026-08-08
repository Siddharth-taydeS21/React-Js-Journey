import React from 'react'

export default function ErrorPage() {
    return (
        <main className="py-15 flex justify-center gap-4 flex-col items-center">
            <div className="size-20 my-10 flex justify-center items-center">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlzoKjVAR9rLWJ926DLapSZZxNODJwhZvn8gaKm_s64gmOzR_cB_6Kx0Uo&s=10' alt="" />
            </div>
            <h1 className="text-3xl font-bold text-red-300 text-shadow-2xs/50">Opps! Error 404</h1>
            <p>Something went wrong! Please check your internet connection or Refresh the page</p>
        </main>
    )
}
