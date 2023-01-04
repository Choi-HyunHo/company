import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getDetailBoard } from "../../api/board/board";

const DetailBoard = () => {
    let params = useParams<any>();

    const {data, isLoading} = useQuery<any>(['getDetailBoard', params.bid, params.pid], () => getDetailBoard(params.bid, params.pid));
    
    
    return (
        <div>1</div>
    )
}

export default DetailBoard;