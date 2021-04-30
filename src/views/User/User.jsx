import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import AppLayout from "../../components/AppLayout/AppLayout";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Table from "../../components/Table/Table";
import apiFunc from "../../services";
import userServices from "../../services/userServices";
import Pagination from "react-js-pagination";
import CreateUserModal from "../../components/CreateUserModal/CreateUserModal";

const User: React.FC = (props) => {
  const [userList, setUserList] = useState([]);
  const [isUserListLoading, setIsUserListLoading] = useState(false);
  const [isUserCreateModalOpen, setIsUserCreateModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(5);
  const [offset, setOffset] = useState(0);

  const tableHead = [
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Email",
      key: "email",
    },
    {
      label: "Position",
      key: "position",
    },
  ];

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = () => {
    setIsUserListLoading(true);
    apiFunc(userServices.getAllUser)
      .then((resp) => {
        if (resp.status === 200) {
          setUserList(resp.data.reverse());
        } else {
          toast.error("Something went wrong!");
        }
        setIsUserListLoading(false);
      })
      .catch((err) => {
        toast.error("Something went wrong!");
        setIsUserListLoading(false);
      });
  };

  const handlePageClick = (pageNumber) => {
    const offset = (pageNumber - 1) * perPage;
    setCurrentPage(pageNumber);
    setOffset(offset);
  };

  const toggleUserCreateModal = (bool) => {
    if (bool !== isUserCreateModalOpen) {
      setIsUserCreateModalOpen(bool);
    }
  };

  return (
    <AppLayout>
      <div id="user-wrapper">
        <BreadCrumb />
        <div className="h3 font-weight-bold">Profile Create And Map</div>
        <div className="d-flex justify-content-between align-items-end">
          <div className="h5 mb-0 pb-0 font-weight-bold">Profiles</div>
          <div
            onClick={() => toggleUserCreateModal(true)}
            className="btn btn-primary btn-sm"
          >
            Create User
          </div>
        </div>
        <hr />

        <Table
          isLoading={isUserListLoading}
          tableHead={tableHead}
          tableBody={userList?.slice(offset, offset + perPage)}
        />
        <div className="d-flex align-items-center justify-content-center w-100 my-3">
          <Pagination
            innerClass="pagination pagination-sm"
            itemClass="page-item"
            linkClass="page-link"
            activePage={currentPage}
            itemsCountPerPage={perPage}
            totalItemsCount={userList?.length}
            pageRangeDisplayed={5}
            onChange={handlePageClick}
          />
        </div>
      </div>
      <CreateUserModal
        onSuccess={fetchUserList}
        show={isUserCreateModalOpen}
        handleClose={() => toggleUserCreateModal(false)}
      />
    </AppLayout>
  );
};

export default User;
