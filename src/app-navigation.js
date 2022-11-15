export const landlordNavigation = [
  {
    text: 'Thống kê',
    path: '/landlord/dashboard',
    icon: 'fa-regular fa-chart-line-up'
  },
  {
    text: 'Phòng trọ',
    icon: 'fa-regular fa-house-user',
    items: [
      {
        text: 'Danh sách phòng',
        icon: 'fa-regular fa-notebook',
        path: '/landlord/room/list'
      }
    ]
  },
  {
    text: 'Cài đặt',
    path: '/landlord/setting',
    icon: 'fa-regular fa-gears'
  }
];
