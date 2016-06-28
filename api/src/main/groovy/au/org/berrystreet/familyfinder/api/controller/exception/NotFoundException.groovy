package au.org.berrystreet.familyfinder.api.controller.exception;

public class NotFoundException extends ApiException {
	private int code
	public NotFoundException (int code, String msg) {
		super(code, msg)
		this.code = code
	}
}
