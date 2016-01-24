# -*- coding: utf-8 -*-
from flask import Blueprint
from flask_restful import Api, Resource
from models import Kitten

kittens_api = Api(Blueprint('kittens_api', __name__)) # pylint: disable=invalid-name

@kittens_api.resource('/kittens')
class KittensAPI(Resource):
    @staticmethod
    def get():
        kittens = Kitten.query
        return [{
            'id': kitten.id,
            'created': kitten.created.isoformat() + 'Z'
        } for kitten in kittens]

    @staticmethod
    def post():
        from app import db

        count = Kitten.query.count()

        if count >= 9:
            return { 'error': 'This basket is full of kittens!' }, 403

        new_kitten = Kitten()
        db.session.add(new_kitten)
        db.session.commit()

        return {
            'id': new_kitten.id,
            'created': new_kitten.created.isoformat() + 'Z'
        }

@kittens_api.resource('/kittens/<int:kitten_id>')
class KittenAPI(Resource):
    @staticmethod
    def delete(kitten_id):
        from app import db
        kitten = Kitten.query.get_or_404(kitten_id)
        db.session.delete(kitten)
        db.session.commit()

        return None, 204
