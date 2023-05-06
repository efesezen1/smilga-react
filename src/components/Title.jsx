function Title({title}) {
    const titleArr = title.split(' ');
    console.log(titleArr);
  return (
     <div className="section-title">
        <h2>
          { titleArr[0]} <span>{titleArr[1]}</span>
        </h2>
     </div>
  )
}
export default Title



