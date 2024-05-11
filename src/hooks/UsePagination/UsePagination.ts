import React, {useEffect, useState} from "react";

export function UsePagination() {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState([1,2,3,4,5,6,7,8,9,10]);
    const [prevPages, setPrevPages] = useState(0);
    const [nextPages, setNextPages] = useState(10);
    const pages = totalPages.slice(prevPages,nextPages);


    function prevPagesClick(){
        if(prevPages > 0) {
            setPrevPages(state => state -= 10);
            setNextPages(state => state -= 10);
        }
    }

    function nextPagesClick(){
        if(nextPages < totalPages.length){
            setPrevPages(state => state += 10);
            setNextPages(state => state += 10);
        }
    }

    function setDefaultPages(){
        setPrevPages(0);
        setNextPages(10);
        setPage(1);
    }

    return { page, setPage, pages, totalPages, setTotalPages, prevPagesClick, nextPagesClick, setDefaultPages };
}
