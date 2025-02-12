function Level({ onClickHandler, text, left }) {
    return ( 
        <div 
            onClick={onClickHandler} 
            className="bg-green-400 w-[100px] text-center hover:translate-y-[5px] h-min p-5 text-2xl rounded-full border-b-[10px] hover:border-b-[5px] border-green-600"
            style={{ marginLeft: `${left}px` }} // Apply dynamic margin
        >
            {text}
        </div>
     );
}

export default Level;
