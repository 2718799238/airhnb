import PictureBrowser from "@/base-ui/picture-browser";
import React, { memo, useEffect, useState } from "react";
import { DetailWrapper } from "./style";
import IconMore from "@/assets/images/svg/icon-more";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchGetEntireRoomListAction } from "@/store/modules/entire/createActions";

const index = memo(() => {
  const [isShow, setShow] = useState(false);

  const { picList } = useSelector((state) => {
    return {
      picList: state.entire.roomList,
    };
  }, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetEntireRoomListAction());
  }, [dispatch]);
  console.log(picList?.[0].picture_urls);
  return (
    <DetailWrapper>
      <div className="header">
        <div className="left">
          <img src={picList?.[0].picture_urls[0]} alt="" />
        </div>
        <div className="right">
          {picList?.[0]?.picture_urls?.slice(1, 5).map((item, index) => {
            return <img src={item} alt="" />;
          })}
        </div>
      </div>
      {isShow && (
        <PictureBrowser
          pictureList={picList?.[0]?.picture_urls}
          close={() => setShow(false)}
        />
      )}
      <div className="morePic" onClick={() => setShow(true)}>
        <IconMore />
      </div>
    </DetailWrapper>
  );
});

export default index;
