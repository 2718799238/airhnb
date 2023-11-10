import React from "react";
import PropTypes from "prop-types";
import { PaginationWrapper } from "./style";

import { Pagination } from "antd";

function EntirePagination(props) {
  return (
    <PaginationWrapper>
      <Pagination
        showSizeChanger={false}
        onChange={props.onChange}
        defaultCurrent={1}
        current={props.currentPage}
        pageSize={30}
        total={props.totalCount}
      />
    </PaginationWrapper>
  );
}

EntirePagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EntirePagination;
