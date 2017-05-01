import cherrypy
import json

class QueryResults(object):

    @cherrypy.expose
    def index(self):
        return "Hello world!"

    @cherrypy.expose
    def search(self, query=""):
        with open('query_specs.json') as data_file:
            data = json.load(data_file)

        if query in data.keys():
            return data[query]
        else:
            return "error"


if __name__ == '__main__':
    cherrypy.quickstart(QueryResults())
