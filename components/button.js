export default function Button({imageUrl, title, clickEventHandler}){
    return <button className="btn" title={title} onClick={clickEventHandler}>
        <img src={imageUrl} alt="image" />
    </button>
}