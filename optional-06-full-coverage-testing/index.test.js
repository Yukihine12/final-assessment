import { test, expect } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum: harus mengembalikan jumlah dari dua angka positif', () => {
    const result = sum(3, 5);
    assert.strictEqual(result, 8);
});

test('sum: harus mengembalikan 0 ketika salah satu angka negatif', () => {
    const result1 = sum(-1, 5);
    const result2 = sum(3, -2);
    assert.strictEqual(result1, 0);
    assert.strictEqual(result2, 0);
});

test('sum: harus mengembalikan 0 ketika kedua angka negatif', () => {
    const result = sum(-1, -5);
    assert.strictEqual(result, 0);
});

test('sum: harus mengembalikan 0 ketika salah satu atau kedua argumen bukan angka', () => {
    const result1 = sum('a', 5);
    const result2 = sum(3, 'b');
    const result3 = sum('a', 'b');
    const result4 = sum(undefined, 5);
    const result5 = sum(3, null);
    const result6 = sum();

    assert.strictEqual(result1, 0);
    assert.strictEqual(result2, 0);
    assert.strictEqual(result3, 0);
    assert.strictEqual(result4, 0);
    assert.strictEqual(result5, 0);
    assert.strictEqual(result6, 0);
});

test('sum: harus mengembalikan 0 ketika kedua angka adalah nol', () => {
    const result = sum(0, 0);
    assert.strictEqual(result, 0);
});