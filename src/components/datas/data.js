import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/reduxdata";
import Myfood from "./allfood";
import Single from "./single/single";
import AOS from "aos";
import "aos/dist/aos.css";
import './data.css';
import { useHistory } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Pagination from "./pagination/pagination";
function Datas() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    function indian(item) {
        const india = Myfood.filter((e) => e.key === item)
        setData(india);
    }
    function western(item) {
        const west = Myfood.filter((e) => e.key === item)
        setData(west);
    }
    function chinese(item) {
        const china = Myfood.filter((e) => e.key === item)
        setData(china);
    }
    function nonveg(item) {
        const non = Myfood.filter((e) => e.key === item)
        setData(non);
    }
    function all() {
        const all = Myfood.filter((e) => e.key)
        setData(all);
    }
    const dispatch = useDispatch();
    // const cart = useSelector(selectCount);
    const history = useHistory()
    function singleDish(id) {
        return (history.push(`/single?id=${id}`));

        }
    const [input, setInput] = useState(" ");
    function Search() {
        const Inputvalue = input;
        const allSearch = Page.filter((item) => item.name.toLowerCase() === Inputvalue);
        setData(allSearch);

    }
    const [data, setData] = useState(Myfood)
    var [currentPage, setcurrentPage] = useState(1)
    var [currentPage1] = useState(8)
    const indexOfLast = currentPage * currentPage1;
    const indexOfFirst = indexOfLast - currentPage1;
    const Page = data.slice(indexOfFirst, indexOfLast);
    const Paginate = (pageNumber) => setcurrentPage(pageNumber);
    // const fetchComments=async (currentPage) =>{
    //     const item=await Myfood();
    //     return item;
    // }
    const handlePageClick = (item) => {

        console.log(item.Paginate)

        let Paginate = item.selected + 1

        // const commentFormServer =  fetchComments(currentPage);
        // setData(commentFormServer);
    }
    return (
        <div>
            <div className="buttons">
                <button onClick={() => all("all")} id="btnall">All</button>
                <button onClick={() => indian("veg")} id="btnindian">Indian</button>
                <button onClick={() => chinese("chinese")} id="btnchinese">Chinese</button>
                <button onClick={() => western("western")} id="btnwestern">western</button>
                <button onClick={() => nonveg("non-veg")} id="btnnon">Non-Veg</button>
            </div>
            <div id="nav-search">
                <img width="22px" alt="srch-img" src="https://www.pngfind.com/pngs/m/432-4323226_search-icon-transparent-search-button-png-png-download.png" />
                <input type="text" id="top-in"
                    value={input}
                    placeholder='Search....'
                    onChange={(e) => setInput(e.target.value.toLowerCase())}></input>
                <button id="nav-search-btn" onClick={() => Search()}>Search</button>
            </div>

            <div id="foodpack" data-aos="fade-up">
                {
                    Page.map((e) => {
                        return <div className="foodpack" id="food-pack" key={e.id} data-aos="flip-left" data-aos-duration="3000">
                            <div className="fooditem" id={"img" + e.id}>
                                <div id="navimg" className="col-sm-12">
                                    <div className="foodimg" onClick={() => singleDish(e.id)}>
                                        <img src={e.url} alt="all-photos" />
                                        {/* onClick={()=>dispatch(singledish())} */}
                                    </div>
                                    <div id="food-name">
                                        <h6 id="dishname">{e.name}</h6>
                                        <p id="price">{e.price}</p>
                                    </div>
                                    <div className="buycart">
                                        <button onClick={() => dispatch(addtoCart(e))} id="btncart">Add cart</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    })
                }
            </div>
            <div>
                {/* <Pagination/> */}   
            </div>
            <div>
               <Pagination
                    postPerPage={currentPage1}
                    totalPost={data.length}
                    Paginate={Paginate}
                /> 
                {/* <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'***'}
                    pageCount={10}
                    marginPagesDisplayed={6}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}

                /> */}

            </div>

        </div>

    )
}
export default Datas