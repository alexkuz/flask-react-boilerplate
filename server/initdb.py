from app import db, create_app

app = create_app()

with app.app_context():
    db.create_all()
