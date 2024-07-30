import { useEffect } from "react";
import { getDetailProduct } from "../data/api";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Detail = () => {
  const [member, setMember] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getDetailProduct(id, (data) => {
      setMember(data);
    });
  }, [id]);
  console.log(member);
  return (
    <div className="detail">
      {Object.keys(member).length > 0 && (
        <div className="card-detail">
          <div className="card-img">
            <img src={member.image} className="card-img-top" alt="..." />
          </div>
          <div className="card-body">
            <table class="table">
              <tbody>
                <tr>
                  <td>Nama Panjang</td>
                  <td>{member.fullName}</td>
                </tr>
                <tr>
                  <td>Tanggal lahir</td>
                  <td>{member.birthday}</td>
                </tr>
                <tr>
                  <td>Golongan Darah</td>
                  <td>{member.bloodType}</td>
                </tr>
                <tr>
                  <td>Zodiak</td>
                  <td>{member.zodiac}</td>
                </tr>
                <tr>
                  <td>Tinggi</td>
                  <td>{member.height}</td>
                </tr>
                <tr>
                  <td>Nama Panggilan</td>
                  <td>{member.nickname}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
