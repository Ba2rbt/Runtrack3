<?php
header('Content-Type: application/json');

require_once __DIR__ . '/config.php';

try {
    $query = $pdo->query("SELECT * FROM utilisateurs");
    $users = $query->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($users);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Erreur : ' . $e->getMessage()]);
}
?>