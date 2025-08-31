<?php
$data = [
  "title" => 'Лендінг ХАБ', // назва заявки
  "source_id" => 21, // ідентифікатор джерела
  "manager_comment" => $_POST['manager_comment'], // коментар до заявки
  "manager_id" => 22, //ідентифікатор відповідального менеджера
  "pipeline_id" => 2, // ідентифікатор воронки (за відсутності параметра буде використана перша воронка у списку)
  "contact" => [
    "full_name" => $_POST['name'],
    "email" => $_POST['email'],
    "phone" => $_POST['phone']
  ],

  "custom_fields" => [
    [
      "uuid" => "LD_1007", // зовнішній ідентифікатор поля,
      "value" => $_POST['question'] ?? '' // значення поля. Для полів з типом select (список/мультисписок) передавати масив рядків
    ],
    [
      "uuid" => "LD_1006",
      "value" => $_POST['role'] ?? ''
    ]
  ]
];

//  "упаковуємо дані"
$data_string = json_encode($data);

// API ключ KeyCRM
$token = 'cdb4b8e800f34ca18358b15fdb33f52b';

// відправляємо на сервер
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://openapi.keycrm.app/v1/pipelines/cards");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt(
  $ch,
  CURLOPT_HTTPHEADER,
  array(
    "Content-type: application/json",
    "Accept: application/json",
    "Cache-Control: no-cache",
    "Pragma: no-cache",
    'Authorization:  Bearer ' . $token
  )
);

$result = curl_exec($ch);
curl_close($ch);
