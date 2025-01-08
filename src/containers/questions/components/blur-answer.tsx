const BlurAnswer = () => {
  return (
    <div className="cursor-pointer select-none p-6 blur-[5px]">
      <div className="mb-5 flex justify-between">
        <h4 className="text-[1.8rem] font-semibold text-[#3182F6]">
          익명의 유저
        </h4>
        <div>{/* <FavoriteIcon className="fill-slate-300" /> */}</div>
      </div>
      <p className="text-[1.8rem] font-light text-[#4e5968]">
        RESTful API는 HTTP 프로토콜을 기반으로하는 웹 서비스 아키텍처입니다.
        자원, 메소드, 메시지 등을 정의하여 클라이언트-서버 간의 통신을 가능하게
        합니다.
      </p>
    </div>
  );
};

export default BlurAnswer;
