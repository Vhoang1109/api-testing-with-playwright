import { Page } from "@playwright/test";

export class ProductPage {
    page: Page;
    // override with property (nâng cao)
    constructor(page: Page) {
        this.page = page;
    }

    async addToCart() {
        await this.page.locator('//div[text()=product_1...  ]').click();
    }


    // demo async function to get cart total

    //  Khi khai báo 1 hàm async, thì chỉ cần return ra biến hoặc giá trị, bên pom mình dùng phải có await 
    // Muốn trả về  biến rõ ràng đó là số, định nghĩa kiểu giá trị 
    async getCartTotal(): Promise<number> {

        let total;
        // lay ra so luong san pham
        // Giả lập chỗ này có thể đọc trên dom hoặc UI mình lấy số lượng sản phẩm, lấy giá tiền, tính tổng tiền, trả về tổng tiền
        let numberOfProducts = 10;
        // lay ra gia tien
        let each = 100;
        // tinh tong tien
        total = numberOfProducts * each;
        // tra ve tong tien
        return total;

    }
};