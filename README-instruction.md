# Ghi chú về code React dùng cho dự án này


## Cấu trúc dự án

- Vì một vài lý do bất khả kháng, phần front-end không được làm theo cách đơn giản nhất mà dựa theo hướng dẫn và project boilerplate của [Stephen Grider - khóa học "Modern React with Redux" trên Udemy](https://www.udemy.com/react-redux/learn/v4/overview).

- Do vậy, dự án vẫn áp dụng cả Redux cho dù không thực sự cần thiết. 

- Project boilerplate được lấy từ [đây](https://github.com/StephenGrider/ReduxSimpleStarter)

## Thực thi dự án:

Điều quan trọng là cấu hình địa chỉ để gọi back-end API. Địa chỉ này cần được gán vào `const ROOT_URL` trong file `index.js` ở folder `action` trong `src` của project front-end.

- Trường hợp muốn test cả back-end lẫn front-end trên local, thì cần:
    - Chạy service mongoDb đầu tiên.
    - Chạy back-end 
    - Đặt `const ROOT_URL` là `'http://localhost:3000'`
    - Chạy front-end thông qua `npm install` và `npm start`. 

- Trường hợp chỉ muốn test front-end, còn back-end lấy từ heroku, thì cần:
    - Đặt `const ROOT_URL` là `'https://fcchn-blog.herokuapp.com/api/'`
    - Chạy front-end thông qua `npm install` và `npm start`. 

Lưu ý: Front-end chạy trên localhost là http://localhost:8080


## Deploy lên heroku

Tham khảo thảo luận ở [đây](https://github.com/StephenGrider/ReduxSimpleStarter/issues/193) để biết một vài xử lý để có thể deploy được lên heroku.  