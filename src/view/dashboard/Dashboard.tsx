import React, { useState } from "react";
import LineChart from "../../components/LineChart";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowUpOutlined, CalendarOutlined } from "@ant-design/icons";
import HeaderProfile from "../../components/HeaderProfile";

type Props = {};

const Dashboard = (props: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="dashboard">
      <div className="dashboard__left">
        <h3>Dashboard</h3>
        <h2 className="dashboard__title">Biểu đồ cấp số</h2>
        <ul className="dashboard__left__list">
          <li className="dashboard__left__list-item">
            <div className="dashboard__left__list-item-top">
            <CalendarOutlined className="calender-icon"/>
            <p>Số thứ tự đã cấp</p>
            </div>
            <div className="dashboard__left__list-item-bottom">
                <h2>4.222</h2>
                <p><span><ArrowUpOutlined /></span> 32,41%</p>
            </div>

          </li>
          <li className="dashboard__left__list-item">
            <div className="dashboard__left__list-item-top">
            <CalendarOutlined className="calender-icon"/>
            <p>Số thứ tự đã bỏ qua</p>
            </div>
            <div className="dashboard__left__list-item-bottom">
                <h2>4.222</h2>
                <p><span><ArrowUpOutlined /></span> 32,41%</p>
            </div>

          </li>
          <li className="dashboard__left__list-item">
            <div className="dashboard__left__list-item-top">
            <CalendarOutlined className="calender-icon"/>
            <p>Số thứ tự đang chờ</p>
            </div>
            <div className="dashboard__left__list-item-bottom">
                <h2>4.222</h2>
                <p><span><ArrowUpOutlined /></span> 32,41%</p>
            </div>

          </li>
          <li className="dashboard__left__list-item">
            <div className="dashboard__left__list-item-top">
            <CalendarOutlined className="calender-icon"/>
            <p>Số thứ tự đã bỏ qua</p>
            </div>
            <div className="dashboard__left__list-item-bottom">
                <h2>4.222</h2>
                <p><span><ArrowUpOutlined /></span> 32,41%</p>
            </div>

          </li>
        </ul>
        <LineChart />
      </div>
      <div className="dashboard__right">
        <HeaderProfile/>
        <h2>Tổng quang</h2>
        <ul className="dashboard__right__list">
          <li className="dashboard__right__list-item">
           2
          </li>
          <li>2</li>
          <li>3</li>
        </ul>
        <ReactDatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          className="date-picker"
        />
      </div>
    </div>
  );
};

export default Dashboard;
