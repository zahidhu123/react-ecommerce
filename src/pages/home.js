import React from 'react'

export default function Home() {
    return (
        <>
            <div className='main-wrapper mt-5'>
                <div className="container">
                    <div className="row justify-content-center pt-5">
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className='d-flex align-items-center'>
                                        <div class="dropdown pe-3">
                                            <button class="btn btn-drop dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                - Hoodies
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                        <div class="dropdown pe-3">
                                            <button class="btn btn-drop dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Size
                                            </button>
                                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                        <div className='pe-3'>
                                            <p className='mb-0'>Reset</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className='d-flex align-items-center justify-content-end'>
                                        <form className='d-flex align-items-center me-3'>
                                            <p className='mb-0 me-1'>Serach:</p>
                                            <input type="text" className='btn-drop' />
                                        </form>
                                        <button className='brn btn-primary btn-drop1'>Add To Card</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Color</th>
                                        <th scope="col">Stock</th>
                                        <th scope="col">Price</th>
                                        <th scope="col" className='text-end'>Buy</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Woo Ninja</td>
                                        <td>Pink</td>
                                        <td>In stock</td>
                                        <td>$35.00</td>
                                        <td>
                                            <button className='w-75'>1</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
