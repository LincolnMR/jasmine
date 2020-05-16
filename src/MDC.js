//Algoritmo de Euclides recursivo
function mdcRecursive(a, b) {
    if (b == 0) {
        return a;
    }
    return mdcRecursive(b, a % b);
}
