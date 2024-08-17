<?php

function checkFolder($folder) {
    $folderPath = 'photos/' . $folder;
    return file_exists($folderPath);
}

function checkImage($folder, $image) {
    $imagePath = 'photos/' . $folder . '/' . $image;
    return file_exists($imagePath);
}

function createFolder($folder) {
    $folderPath = 'photos/' . $folder;
    return mkdir($folderPath);
}

function deleteFolder($folder) {
    $folderPath = 'photos/' . $folder;
    $files = glob($folderPath . '/*');
    foreach ($files as $file) {
        if (is_file($file)) {
            unlink($file);
        }
    }
    return rmdir($folderPath);
}

function loadFolders() {
    $folders = array_filter(glob('photos/*'), 'is_dir');
    return array_map('basename', $folders);
}

function loadPhotos($folder) {
    $folderPath = 'photos/' . $folder;
    $files = array_filter(glob($folderPath . '/*'), 'is_file');
    $photos = [];
    foreach ($files as $file) {
        $photos[] = [
            'name' => basename($file),
            'url' => $file,
            'time' => filemtime($file)
        ];
    }
    return $photos;
}

function deleteImage($folder, $image) {
    $imagePath = 'photos/' . $folder . '/' . $image;
    return unlink($imagePath);
}

function uploadImage($folder) {
    $targetDir = 'photos/' . $folder . '/';
    $targetFile = $targetDir . basename($_FILES['file']['name']);
    if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
        touch($targetFile);  
        return true;
    }
    return false;
}

$action = $_GET['action'] ?? '';

switch ($action) {
    case 'checkFolder':
        $folder = $_GET['folder'] ?? '';
        echo json_encode(['exists' => checkFolder($folder)]);
        break;

    case 'checkImage':
        $folder = $_POST['folder'] ?? '';
        $image = basename($_FILES['file']['name'] ?? '');
        echo json_encode(['exists' => checkImage($folder, $image)]);
        break;

    case 'createFolder':
        $data = json_decode(file_get_contents('php://input'), true);
        $folder = $data['folder'] ?? '';
        echo json_encode(['success' => createFolder($folder)]);
        break;

    case 'deleteFolder':
        $data = json_decode(file_get_contents('php://input'), true);
        $folder = $data['folder'] ?? '';
        echo json_encode(['success' => deleteFolder($folder)]);
        break;

    case 'loadFolders':
        echo json_encode(['folders' => loadFolders()]);
        break;

    case 'loadPhotos':
        $folder = $_GET['folder'] ?? '';
        echo json_encode(['photos' => loadPhotos($folder)]);
        break;

    case 'deleteImage':
        $data = json_decode(file_get_contents('php://input'), true);
        $folder = $data['folder'] ?? '';
        $image = $data['image'] ?? '';
        echo json_encode(['success' => deleteImage($folder, $image)]);
        break;

    case 'uploadImage':
        $folder = $_POST['folder'] ?? '';
        echo json_encode(['success' => uploadImage($folder)]);
        break;

    default:
        echo json_encode(['error' => 'Invalid action']);
        break;
}
