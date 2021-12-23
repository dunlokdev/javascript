// Kéo xuống dưới để xem ví dụ sử dụng
// toán tử gán

const NGU_TOC = 'NGU_TOC';
const XA_TOC = 'XA_TOC';
const DIEU_TOC = 'DIEU_TOC';

const BIEN = 'BIEN';
const NUI = 'NUI';
const RUNG = 'RUNG';

function recalculateWithPlace(place, type, atk, hp, spd) {
	if (place === BIEN) {
		if (type === NGU_TOC) {
			hp += 10;
			atk += 10;
			spd += 10;
		} else {
			hp -= 10;
			atk -= 10;
			spd -= 10;
		}
	} else if (place === NUI) {
		if (type === XA_TOC) {
			hp += 10;
			atk += 10;
			spd += 10;
		} else {
			hp -= 10;
			atk -= 10;
			spd -= 10;
		}
	} else {
		if (type === DIEU_TOC) {
			hp += 10;
			atk += 10;
			spd += 10;
		} else {
			hp -= 10;
			atk -= 10;
			spd -= 10;
		}
	}
	return [atk, hp, spd];
}

/**
 * Ví dụ sử dụng toán tử gán
 *
 * let atk = 100
 *
 * Để cộng thêm 50 cho atk làm như sau:
 *
 * atk = atk + 50 // Output: 150
 *
 * Hoặc viết ngắn gọn hơn:
 *
 * atk += 50 (tương đương atk = atk + 50)
 *
 * Chú ý:
 * - Hãy nhớ đọc hiểu toán tử gán từ phải qua trái
 * - Các toán tử + - * / có cách làm tương tự
 */
