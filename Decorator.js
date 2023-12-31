class Member {
  constructor(name, email) {
    this._name = name;
    this._email = email;
    this.point = 0;
  }
  getDetails() {
    return `
    會員姓名: ${this._name}
    會員信箱: ${this._email}
    `;
  }
}

// decorator 1
function VIP(member, point) {
  member.point += point;
  if (member.point >= 500) member.level = "鑽石會員";
  else if (member.point >= 100) member.level = "高級會員";
  else return "點數不足, 無法升級";

  member.unlock = function () {
    return `解鎖藍光高清影片區! ${member.level}可觀看 ${member.point}小時`;
  };
}

// 註冊會員
const huan = new Member("景換", "1234@email.com");
console.log(huan.getDetails()); // 會員姓名: 景換
// 會員信箱: 1234@email.com

// 升級會員
VIP(huan, 500);
console.log(huan.level); // 鑽石會員
console.log(huan.unlock()); // 解鎖藍光高清影片區! 鑽石會員可觀看 500小時
