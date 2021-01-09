# Make sure to run `npm start` before

compile-test:
	docker-compose exec library jest compile

setup-test:
	docker-compose exec library jest setup

exportverifier-test:
	docker-compose exec library jest export-verifier

computewitness-test:
	docker-compose exec library jest compute-witness

generateproof-test:
	docker-compose exec library jest generate-proof
